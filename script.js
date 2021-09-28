const ListA = ["Be yourself; everyone else is already taken.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","So many books, so little time.","A friend is someone who knows all about you and still loves you.","To live is the rarest thing in the world. Most people exist, that is all."];
const ListB = ["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","In three words I can sum up everything I've learned about life: it goes on.","Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend","Without music, life would be a mistake.","Insanity is doing the same thing, over and over again, but expecting different results."];
const ListC = ["You know you're in love when you can't fall asleep because reality is finally better than your dreams.","If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.","If you tell the truth, you don't have to remember anything.","It is better to be hated for what you are than to be loved for what you are not.","To live is the rarest thing in the world. Most people exist, that is all."];

const selectListItem  = (array) => {
    return array[Math.floor(Math.random()*array.length)];
};

console.log(selectListItem(ListA) + "\n \n" + selectListItem(ListB) + "\n \n" + selectListItem(ListC));