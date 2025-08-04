function swapTheme() {
//write your code
const app=document.getElementById("app");
const btn=document.getElementById("swap");
if(app.className==="day")
{
  app.className="night";
  btn.className="button_night";
}
else
{
  app.className="day";
  btn.className="button_day";
}

}