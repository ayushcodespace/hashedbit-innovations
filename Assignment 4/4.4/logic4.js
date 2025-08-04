// javascript code goes here
const text=document.getElementById("text-container");
document.getElementById("colorchange").onclick=function(){
  const color=document.getElementById("colorbox").value;
  text.style.color=color;
}
document.getElementById("fontsize").oninput=function(){
  text.style.fontSize =document.getElementById("fontsize").value+'px';
}
document.getElementById("italic").onclick=function(){
  if(text.style.fontStyle==="italic")
  {
    text.style.fontStyle="normal";
  }
  else
  {
    text.style.fontStyle="italic";
  }
}
document.getElementById("underline").onclick=function(){
  if(text.style.textDecoration==="underline")
  {
    text.style.textDecoration="none";
  }
  else
  {
    text.style.textDecoration="underline";
  }
}
document.getElementById("bold").onclick=function(){
  if(text.style.fontWeight==="bold")
  {
    text.style.fontWeight="normal";
  }
  else
  {
    text.style.fontWeight="bold";
  }
}
document.getElementById("list").oninput=function(){
  text.style.fontFamily=this.value;
}
document.getElementById("getstyle").onclick=function(){
  const cssprop=document.getElementById("css-props");
  const color=text.style.color;
  const fontsize=text.style.fontSize;
  const fontstyle=text.style.fontStyle;
  const isfontstyle= fontstyle==="normal"? "" : `\nFont-Style: ${fontstyle}`;
  const textdecoration=text.style.textDecoration;
  const istextdecoration= textdecoration==="none"? "" : `\nText-Decoration: ${textdecoration}`;
  const fontweight=text.style.fontWeight;
  const isfontweight= fontweight==="normal"? "" : `\nFont-Weight: ${fontweight}`;
  const fontfamily=text.style.fontFamily;
  const cssDisplay=`{\nColor : ${color}\nFont-Size : ${fontsize}${isfontstyle}${istextdecoration}${isfontweight}\nFont-Family : ${fontfamily}\n}`;
  cssprop.textContent=cssDisplay;
}