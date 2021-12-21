function numToText() {
    let numToText1;
    numToText1 = prompt("num");
    let numToTextI;
    numToTextI = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
    let numToTextII;
    numToTextII = ['', 'เอ็ด', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
    let numToTextIII;
    numToTextIII = ['', 'สิบ', 'ยี่สิบ', 'สามสิบ', 'สี่สิบ', 'ห้าสิบ', 'หกสิบ', 'เจ็ดสิบ', 'แปดสิบ', 'เก้าสิบ'];
    let numToTextIV;
    numToTextIV = ['', 'หนึ่งร้อย', 'สองร้อย', 'สามร้อย', 'สี่ร้อย', 'ห้าร้อย', 'หกร้อย', 'เจ็ดร้อย', 'แปดร้อย', 'เก้าร้อย'];
    let numToTextV;
    numToTextV = ['', 'หนึ่งพัน', 'สองพัน', 'สามพัน', 'สี่พัน', 'ห้าพัน', 'หกพัน', ' เจ็ดพัน', 'แปดพัน', 'เก้าพัน'];
    let numToTextVI;
    numToTextVI = ['', 'หนึ่งหมื่น', 'สองหมื่น', 'สามหมื่น', 'สี่หมื่น', 'ห้าหมื่น', 'หกหมื่น', 'เจ็ดหมื่น', 'แปดหมื่น', 'เก้าหมื่น'];
    let numToTextVII;
    numToTextVII = ['', 'หนึ่งแสน', 'สองแสน', 'สามแสน', 'สี่แสน', 'ห้าแสน', 'หกแสน', 'เจ็ดแสน', 'แปดแสน', 'เก้าแสน'];
    let numToTextVIII;
    numToTextVIII = ['', 'หนึ่งล้าน', 'สองล้าน', 'สามล้าน', 'สี่ล้าน', 'ห้าล้าน', 'หกล้าน', 'เจ็ดล้าน', 'แปดล้าน', 'เก้าล้าน'];
    if (numToText1.length == 1) {
        console.log(numToTextI[numToText1[0]]);
    } else if (numToText1 == 10 || numToText1 == 20 || numToText1 == 30 || numToText1 == 40 || numToText1 == 50 || numToText1 == 60 || numToText1 == 70 || numToText1 == 80 || numToText1 == 90) {
        console.log(numToTextIII[numToText1[0]]);
    } else if (numToText1 == 100 || numToText1 == 200 || numToText1 == 300 || numToText1 == 400 || numToText1 == 500 || numToText1 == 600 || numToText1 == 700 || numToText1 == 800 || numToText1 == 900) {
        console.log(numToTextIV[numToText1[0]]);
    } else if (numToText1 == 1000 || numToText1 == 2000 || numToText1 == 3000 || numToText1 == 4000 || numToText1 == 5000 || numToText1 == 6000 || numToText1 == 7000 || numToText1 == 8000 || numToText1 == 9000) {
        console.log(numToTextV[numToText1[0]]);
    } else if (numToText1 == 10000 || numToText1 == 20000 || numToText1 == 30000 || numToText1 == 40000 || numToText1 == 50000 || numToText1 == 60000 || numToText1 == 70000 || numToText1 == 80000 || numToText1 == 90000) {
        console.log(numToTextVI[numToText1[0]]);
    } else if (numToText1 == 100000 || numToText1 == 200000 || numToText1 == 300000 || numToText1 == 400000 || numToText1 == 500000 || numToText1 == 600000 || numToText1 == 700000 || numToText1 == 800000 || numToText1 == 900000) {
        console.log(numToTextVII[numToText1[0]]);
    } else if (numToText1 == 1000000 || numToText1 == 2000000 || numToText1 == 3000000 || numToText1 == 4000000 || numToText1 == 5000000 || numToText1 == 6000000 || numToText1 == 7000000 || numToText1 == 8000000 || numToText1 == 9000000) {
        console.log(numToTextVIII[numToText1[0]]);
    } else if (numToText1.length == 2) {
        console.log(numToTextIII[numToText1[0]], numToTextII[numToText1[1]]);
    } else if (numToText1.length == 3) {
        console.log(numToTextIV[0], numToTextIII[numToText1[1]], numToTextII[numToText1[2]]);
    } else if (numToText1.length == 4) {
        console.log(numToTextV[numToText1[0]], numToTextIV[numToText1[1]], numToTextIII[numToText1[2]], numToTextII[numToText1[3]])
    } else if (numToText1.length == 5) {
        console.log(numToTextVI[numToText1[1]], numToTextV[numToText1[2]], numToTextIV[numToText1[3]], numToTextIII[numToText1[4]], numToTextII[numToText1[5]])
    } else if (numToText1.length == 6) {
        console.log(numToTextVII[0], numToTextVI[1], numToTextV[2], numToTextIV[3], numToTextIII[numToText1[4]], numToTextII[numToText1[5]], numToTextII[numToText1[6]])
    } else if (numToText1.length == 7) {
        console.log(numToTextVIII[numToText1[0]], numToTextVII[numToText1[1]], numToTextVI[numToText1[2]], numToTextV[numToText1[3]], numToTextIV[numToText1[4]], numToTextIII[numToText1[5]], numToTextII[numToText1[6]], numToTextII[numToText1[7]])
    } 
}
numToText(), numToText(), numToText();