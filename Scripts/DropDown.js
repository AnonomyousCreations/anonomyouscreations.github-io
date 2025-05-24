const DropDowns = document.getElementsByClassName("DropDown");
const DropDownText = document.getElementsByClassName("DropDownText");

for (let i = 0; i < DropDowns.length; i++)
{
  let Obj = DropDowns[i];

  Obj.Dropped = false;

  Obj.onclick = () =>
  {
    Obj.Dropped = !Obj.Dropped;

    if (Obj.Dropped)
    {
      Obj.style.transform = 'rotateZ(90deg)';
      DropDownText[i].style.maxHeight = "500px";
      return;
    }
    Obj.style.transform = 'rotateZ(0)';
    DropDownText[i].style.maxHeight = "0";
  }
}