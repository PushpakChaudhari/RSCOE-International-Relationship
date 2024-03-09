var $els = $('.menu a, .menu header');
var count = $els.length;
var grouplength = Math.ceil(count/3);
var groupNumber = 0;
var i = 1;
$('.menu').css('--count',count+'');
$els.each(function(j){
    if ( i > grouplength ) {
        groupNumber++;
        i=1;
    }
    $(this).attr('data-group',groupNumber);
    i++;
});

$('.menu footer button').on('click',function(e){
    e.preventDefault();
    $els.each(function(j){
        $(this).css('--top',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -15) - 20);
        $(this).css('--delay-in',j*.1+'s');
        $(this).css('--delay-out',(count-j)*.1+'s');
    });
    $('.menu').toggleClass('closed');
    e.stopPropagation();
});

// run animation once at beginning for demo
setTimeout(function(){
    $('.menu footer button').click();
    setTimeout(function(){
        $('.menu footer button').click();
    }, (count * 100) + 500 );
}, 1000);


const currentYear = new Date().getFullYear();

// Get all the table rows
const rows = document.querySelectorAll("#contextTable tr");

// Loop through the rows and update the year in the date
for (const row of rows) {
  const dateCell = row.querySelector("td:first-child");
  const date = dateCell.textContent;
  const year = date.slice(-4);
  if (year < currentYear) {
    dateCell.textContent = date.slice(0, -4) + " (Previous Year)";
  }
}