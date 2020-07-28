class Player{
constructor(){

}

updateCount(count){
database.ref('/').update({ playerCount: count }); }
update(name){ var playerIndex = "player" + playerCount;
database.ref(playerIndex).set({ name:name }); 
}

}