// Print list items
const worldEvents = document.querySelector('#worldEvents');
const eventButton = document.querySelector('#eventButton');
eventButton.addEventListener('click', printItem);

const listItems = [
  'Bill Clinton becomes President; Monica Lewinsky begins college in Portland',
  'The U.S. & Russia got along for a few minutes (START II)',
  'The Waco seige happened & I\'m sure everyone was okay',
  'NASA actually had funding for a plethora of missions',
  'A lot of earthquakes kill a lot of people',
  'Beanie Babies are launched; people don\'t care yet',
  'The Maascrict Treaty establishes the EU; England\'s already grumpy',
  'A few other things happened too'
  ];

i = 0;
function printItem() {
    const newItem = document.createElement('li');
    worldEvents.appendChild(newItem);
    newItem.textContent = listItems[i];
    i++;
    if (i >= listItems.length){
        i = 0;
    }
}

// Hide button after last array item (hack); show start button; unblock vertical scroll
$(document).ready(function () {
    let count = 0;
    $("#eventButton").click(function () {
        if (count >= 7) {
            $("#eventButton").hide();
            $("#startThings").show();
            $("body").css('overflow','visible');
        } else count++
    });
});