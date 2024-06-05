// firebaseHelpers.js
import { child, get, ref, set } from "firebase/database";
import { database } from "../core/firebase";

/**
 * Salva dados no Firebase Database.
 * @param {string} path - O caminho no banco de dados onde os dados serão salvos.
 * @param {object} data - Os dados que serão salvos.
 * @returns {Promise<void>} - Uma promessa que se resolve quando os dados são salvos.
 */
const saveData = async (path, data) => {
  try {
    const dataRef = ref(database, path);
    await set(dataRef, data);
    console.log("Dados salvos com sucesso");
  } catch (error) {
    console.error("Erro ao salvar dados:", error);
  }
};

/**
 * Lê dados do Firebase Database.
 * @param {string} path - O caminho no banco de dados de onde os dados serão lidos.
 * @returns {Promise<object|null>} - Uma promessa que se resolve com os dados lidos ou null se os dados não existirem.
 */
const readData = async (path) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, path));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("Nenhum dado disponível");
      return null;
    }
  } catch (error) {
    console.error("Erro ao ler dados:", error);
    return null;
  }
};

export { readData, saveData };
