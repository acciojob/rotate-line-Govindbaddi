//your JS code here. If required.
let deg=0
    const line=document.getElementById('line')
    setInterval(()=>{
	 deg+=2
	line.style.transform=`rotate(${deg}deg)`
    },20)