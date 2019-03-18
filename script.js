const form = document.forms['form'];
const selectedSize = form.elements["size"];

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
    flow = size[selectedSize.value];
    return flow; 
}


function displayFlow () {
    let result = document.getElementById('result');
    let flow = getFlow();
    result.innerHTML = flow + "gal";
}  



function calOverApply() {
    let flow = 0;
    flow = size[selectedSize.value]; 
    const worn = document.getElementById('worn').value;
<<<<<<< HEAD
    const overApply = ((worn/flow)*100) -100 + "%";
    console.log(worn);
    console.log(flow);
    console.log(selectedSize);
=======
    const overApply = ((worn/flow)*100) - 100 + "%";
>>>>>>> 6f65365f40bae81a3db2339dddcbf846c190751e
    return overApply;
}

function displayOverApply() {
    let over = document.getElementById('over');
    let display = calOverApply();
    over.innerHTML = display;
}
