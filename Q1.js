const fs = require('fs');
const readline = require("readline");
const rdln = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

try {
    rdln.question("What is the address of the file?", function(path) {

        ///////////////////////////////////////////////////////////utility
        var data = fs.readFileSync(path);
        var bill = data.toString();
        var i;
        var pos = -1;

        ///////////////////////////////////////////////////////////Answer var
        var customerNo = "";
        var accountNo = "";
        var billDate = "";
        var billNum = "";
        var billPer = "";
        var TNC = "";
        ///////////////////////////////////////////////////////////Skip 9 lines
        for(i=0; i <= 9; i++){
            pos++;
            //process.stdout.write(bill[pos]);
            while(bill[pos] != '\n'){
                pos++;
                //process.stdout.write(bill[pos]);
            }
        }
        ///////////////////////////////////////////////////////////Skip to customer number
        while(isNaN(bill[pos+1]) || bill[pos+1] == ' '){
            pos++;
            //process.stdout.write(bill[pos]);
        }
        ///////////////////////////////////////////////////////////Get customer number
        while(bill[pos+1] != ' '){
            pos++;
            customerNo += bill[pos];
            //process.stdout.write(bill[pos]);
        }
        ///////////////////////////////////////////////////////////Skip to account number
        while(isNaN(bill[pos+1]) || bill[pos+1] == ' '){
            pos++;
            //process.stdout.write(bill[pos]);
        }
        ///////////////////////////////////////////////////////////Get account number
        while(bill[pos+1] != '\n'){
            pos++;
            accountNo += bill[pos];
            //process.stdout.write(bill[pos]);
        }
        ///////////////////////////////////////////////////////////Skip to bill date
        pos = bill.indexOf("Bill date: ", pos) + 10;
        ///////////////////////////////////////////////////////////Get bill date
        while(bill[pos+1] != '\n'){
            pos++;
            billDate += bill[pos];
            //process.stdout.write(bill[pos]);
        }
        ///////////////////////////////////////////////////////////Skip to bill number
        pos = bill.indexOf("Bill number: ", pos) + 12;
        ///////////////////////////////////////////////////////////Get to bill number
        while(bill[pos+1] != '\n'){
            pos++;
            billNum += bill[pos];
            //process.stdout.write(bill[pos]);
        }
        ///////////////////////////////////////////////////////////Skip 2 lines
        for(i=0; i <= 2; i++){
            pos++;
            //process.stdout.write(bill[pos]);
            while(bill[pos] != '\n'){
                pos++;
                //process.stdout.write(bill[pos]);
            }
        }
        ///////////////////////////////////////////////////////////Skip to bill period
        pos = bill.indexOf("  ", pos);
        while(bill[pos+1] == ' '){
            pos++;
            //rocess.stdout.write(bill[pos]);
        }
        ///////////////////////////////////////////////////////////Get bill period
        while(bill[pos+1] != '\n'){
            pos++;
            billPer += bill[pos];
            //process.stdout.write(bill[pos]);
        }
        ///////////////////////////////////////////////////////////Skip to total new charges
        pos = bill.indexOf("Total new charges", pos) + 16;
        while(bill[pos+1] == ' '){
            pos++;
            //process.stdout.write(bill[pos]);
        }
        ///////////////////////////////////////////////////////////Get total new charges
        while(bill[pos+1] != ' '){
            pos++;
            TNC += bill[pos];
            //process.stdout.write(bill[pos]);
        }
        process.stdout.write("Customer Number: " + customerNo + "\n");
        process.stdout.write("Account Number: " + accountNo + "\n");
        process.stdout.write("Bill Date: " + billDate + "\n");
        process.stdout.write("Bill Number: " + billNum + "\n");
        process.stdout.write("Bill period: " + billPer + "\n");
        process.stdout.write("Total New Charges: " + TNC + "\n");




    });
}
catch (e) {
    console.log("error");
}
