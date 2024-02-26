
      const Selection =({applyColor})=>{
      const [bgColor,setBgColor]=useState("");


      const applyBgColor=()=>{
      setBgColor(background);
 }
      const changeColor=()=>{
      applyColor(applyBgColor);
 }
      return(
      <div style={{  backgroundColor:bgColor, width:200, height:200, border:"1 px solid gray"}}onClick={changeColor}>
        <p>Selection</p>
      </div>
 )
 
}