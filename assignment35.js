function jojo() {
    let jojo1;
    jojo1 = prompt("num");

    let jojoI;
    jojoI = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
    let jojoII;
    jojoII = ['', 'เอ็ด', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
    let jojoIII;
    jojoIII = ['', 'สิบ', 'ยี่สิบ', 'สามสิบ', 'สี่สิบ', 'ห้าสิบ', 'หกสิบ', 'เจ็ดสิบ', 'แปดสิบ', 'เก้าสิบ'];
    let jojoIV;
    jojoIV = ['', 'หนึ่งร้อย', 'สองร้อย', 'สามร้อย', 'สี่ร้อย', 'ห้าร้อย', 'หกร้อย', 'เจ็ดร้อย', 'แปดร้อย', 'เก้าร้อย'];
    let jojoV;
    jojoV = ['', 'หนึ่งพัน', 'สองพัน', 'สามพัน', 'สี่พัน', 'ห้าพัน', 'หกพัน', ' เจ็ดพัน', 'แปดพัน', 'เก้าพัน'];
    let jojoVI;
    jojoVI = ['', 'หนึ่งหมื่น', 'สองหมื่น', 'สามหมื่น', 'สี่หมื่น', 'ห้าหมื่น', 'หกหมื่น', 'เจ็ดหมื่น', 'แปดหมื่น', 'เก้าหมื่น'];
    let jojoVII;
    jojoVII = ['', 'หนึ่งแสน', 'สองแสน', 'สามแสน', 'สี่แสน', 'ห้าแสน', 'หกแสน', 'เจ็ดแสน', 'แปดแสน', 'เก้าแสน'];
    let jojoVIII;
    jojoVIII = ['', 'หนึ่งล้าน', 'สองล้าน', 'สามล้าน', 'สี่ล้าน', 'ห้าล้าน', 'หกล้าน', 'เจ็ดล้าน', 'แปดล้าน', 'เก้าล้าน'];


    if (jojo1.length == 1) {
        console.log(jojoI[jojo1[0]]);
    } else {
        if (jojo1 == 10 || jojo1 == 20 || jojo1 == 30 || jojo1 == 40 || jojo1 == 50 || jojo1 == 60 || jojo1 == 70 || jojo1 == 80 || jojo1 == 90) {
            console.log(jojoIII[jojo1[0]]);
        } else {
            if (jojo1 == 100 || jojo1 == 200 || jojo1 == 300 || jojo1 == 400 || jojo1 == 500 || jojo1 == 600 || jojo1 == 700 || jojo1 == 800 || jojo1 == 900) {
                console.log(jojoIV[jojo1[0]]);
            } else {
                if (jojo1 == 1000 || jojo1 == 2000 || jojo1 == 3000 || jojo1 == 4000 || jojo1 == 5000 || jojo1 == 6000 || jojo1 == 7000 || jojo1 == 8000 || jojo1 == 9000) {
                    console.log(jojoV[jojo1[0]]);
                } else {
                    if (jojo1 == 10000 || jojo1 == 20000 || jojo1 == 30000 || jojo1 == 40000 || jojo1 == 50000 || jojo1 == 60000 || jojo1 == 70000 || jojo1 == 80000 || jojo1 == 90000) {
                        console.log(jojoVI[jojo1[0]]);
                    } else {
                        if (jojo1 == 100000 || jojo1 == 200000 || jojo1 == 300000 || jojo1 == 400000 || jojo1 == 500000 || jojo1 == 600000 || jojo1 == 700000 || jojo1 == 800000 || jojo1 == 900000) {
                            console.log(jojoVII[jojo1[0]]);
                        } else {
                            if (jojo1 == 1000000 || jojo1 == 2000000 || jojo1 == 3000000 || jojo1 == 4000000 || jojo1 == 5000000 || jojo1 == 6000000 || jojo1 == 7000000 || jojo1 == 8000000 || jojo1 == 9000000) {
                                console.log(jojoVIII[jojo1[0]]);
                            } else {
                                if (jojo1.length == 2) {
                                    console.log(jojoIII[jojo1[0]], jojoII[jojo1[1]]);
                                } else {
                                    if (jojo1.length == 3) {
                                        console.log(jojoIV[0], jojoIII[jojo1[1]], jojoII[jojo1[2]]);
                                    } else {
                                        if (jojo1.length == 4) {
                                            console.log(jojoV[jojo1[0]], jojoIV[jojo1[1]], jojoIII[jojo1[2]], jojoII[jojo1[3]])
                                        } else {
                                            if (jojo1.length == 5) {
                                                console.log(jojoVI[jojo1[1]], jojoV[jojo1[2]], jojoIV[jojo1[3]], jojoIII[jojo1[4]], jojoII[jojo1[5]])
                                            } else {
                                                if (jojo1.length == 6) {
                                                    console.log(jojoVII[0], jojoVI[1], jojoV[2], jojoIV[3], jojoIII[jojo1[4]], jojoII[jojo1[5]], jojoII[jojo1[6]])
                                                } else {
                                                    if (jojo1.length == 7) {
                                                        console.log(jojoVIII[jojo1[0]], jojoVII[jojo1[1]], jojoVI[jojo1[2]], jojoV[jojo1[3]], jojoIV[jojo1[4]], jojoIII[jojo1[5]], jojoII[jojo1[6]], jojoII[jojo1[7]])
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
jojo(), jojo(), jojo();