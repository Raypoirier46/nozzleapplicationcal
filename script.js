



const size = {
    '01': 0.10,
    '015': 0.15,
    '02': 0.2,
    '025': 0.25,
    '03': 0.3,
    '035': 0.35,
    '04': 0.4,
    '05': 0.5,
    '06': 0.6,
    '08': 0.8,
    '10': 1,
}

// const slectedSize = document.getElementById("size")

function getFlow() {
    let flow = 0;
    const form = document.forms['form'];
    const selectedSize = form.elements["size"];
    flow = size[selectedSize.value]
    return flow; 
}


function displayFlow () {
    let result = document.getElementById('result');
    let flow = getFlow();
    result.innerHTML = flow
}  



// const overApply = overApply => { 
//     document.getElementById('worn')/document.getElementById('result')
//     return overApply
// }
