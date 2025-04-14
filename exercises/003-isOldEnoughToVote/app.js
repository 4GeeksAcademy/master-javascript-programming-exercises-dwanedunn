function isOldEnoughToVote(age) {
  const VOTINGAGE = 18;
  if(age>=VOTINGAGE){
    return true;
  } else{
    return false;
  }
}
