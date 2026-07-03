var allfunction = {

    users: [],

    addAcc() {

        var accName = prompt("Name");
        var id = Number(prompt("Id"));

        for (var i = 0; i < this.users.length; i++) {

            if (this.users[i].id == id) {

                alert("ID Already Exists");
                id = Number(prompt("Enter Another ID"));
                i = -1;

            }

        }

        var balance = Number(prompt("Enter Balance"));

        this.users.push({
            name: accName,
            id: id,
            balance: balance
        });

        alert("Account Added Successfully");

    },

    cashOut() {

        var id = Number(prompt("Enter id for cash out"));
        var amount = Number(prompt("Enter Amount"));

        for (var i = 0; i < this.users.length; i++) {

            if (this.users[i].id == id) {

                if (amount <= this.users[i].balance) {

                    this.users[i].balance =
                    this.users[i].balance - amount;

                    alert("Cash Out Success");
                    alert("Your Balance Is : " + this.users[i].balance);

                }

                else {

                    alert("You Can't Cash Out " + amount);
                    alert("Your Balance Is Only " + this.users[i].balance);

                }

                return;

            }

        }

        alert("Account Not Found");

    },

    transfer() {
        var fromID = Number(prompt("Enter sender id"));
        var toID = Number(prompt("Enter receiver id"));
        var amount = Number(prompt("Enter amount"));
        var fromUser;
        var toUser;

        for(var i = 0; i < this.users.length; i++) {
            if(this.users[i].id == fromID) {
                fromUser = this.users[i];
            }

            if(this.users[i].id == toID) {
                toUser = this.users[i];
            }
        }

        if(fromUser == undefined || toUser == undefined) {
            alert("Account Not Found");
            return;
        }

        if(amount > fromUser.balance) {
            alert("Your Balance Is Only " + fromUser.balance);
            return;
        }

        fromUser.balance -= amount;
        toUser.balance += amount;
        alert("Transfer Success");
    },

    deleteAcc() {

        var id = Number(prompt("Enter id"));

        for(var i = 0; i < this.users.length; i++) {

            if (this.users[i].id == id) {
                this.users.splice(i, 1);

                alert("Account Deleted");
                return;

            }

        }

        alert("Account Not Found");

    }
};


allfunction.addAcc();
allfunction.addAcc();
allfunction.cashOut();
allfunction.transfer();
allfunction.deleteAcc();
console.log(allfunction.users);
