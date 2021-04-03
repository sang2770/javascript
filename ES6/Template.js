var brand="F8";
var course="Javascript";



function hightlight([first, ...res], ...value)
{
    return value.reduce(
        (total, item)=>{
            return [...total,  `<span>${item}</span>`, res.shift()]
        },
        [first]
    )
}

var html=hightlight`Hoc lap trinh ${course} tai ${brand} !`;
console.log(html.join(" "));
document.write(html.join(" "));