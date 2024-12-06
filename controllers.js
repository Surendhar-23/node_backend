const { db } = require("./config");

createAgreement = async (req, res) => {
  try {
    const agreementData = req.body;

    const newAgreement = await db.collection("agreements").add(agreementData);
    res.status(201).json({ id: newAgreement.id, ...agreementData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

getAgreement = async (req, res) => {
  try {
    const { id } = req.params;
    const agreement = await db.collection("agreements").doc(id).get();
    if (!agreement.exists) {
      return res.status(404).json({ message: "Agreement not found" });
    }
    res.json({ id: agreement.id, ...agreement.data() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

updateAgreement = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    await db.collection("agreements").doc(id).update(updatedData);
    res.json({ id, ...updatedData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

deleteAgreement = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("agreements").doc(id).delete();
    res.json({ message: "Agreement deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

listAgreements = async (req, res) => {
  try {
    const agreementsSnapshot = await db.collection("agreements").get();
    const agreements = agreementsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(agreements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAgreement,
  getAgreement,
  updateAgreement,
  deleteAgreement,
  listAgreements,
};
