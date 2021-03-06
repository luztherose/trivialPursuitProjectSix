import firebase from './firebase';

const saveGame = (gameName, apiData) => {
  const newGameSave = {
    gameName: gameName,
    category: apiData[0].category,
    numQuestions: apiData.length,
    gameData: apiData,
  };

  const dbRef = firebase.database().ref();

  const saveGameRef = dbRef.push();
  saveGameRef.set({
    id: saveGameRef.key,
    ...newGameSave,
  });
};

export default saveGame;
