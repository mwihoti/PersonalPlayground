const data = [
    {"first_name":"Dee","last_name":"Kyles","phone":"(631) 8535492","gender":"male","picture":"http://dummyimage.com/172x100.png/ff4544/ffffff"},
    {"first_name":"Andee","last_name":"Ogles","phone":"(531) 8435492","gender":"Female","picture":"http://dummyimage.com/172x100.png/ff4444/ffffff"},
    {"first_name":"Berri","last_name":"Kinforth","phone":"(535) 9255883","gender":"Female","picture":"http://dummyimage.com/244x100.png/dddddd/000000"},
    {"first_name":"Shantee","last_name":"Sterndale","phone":"(640) 1705736","gender":"Female","picture":"http://dummyimage.com/133x100.png/5fa2dd/ffffff"}
    
    ];
    console.log("Original Data", data);
    const phoneBook = [];

    // sorting or array of objects so as to run binary search

    const sortData = data.sort((a, b) =>  a.first_name.localeCompare(b.first_name));
    phoneBook.push(...data);
    console.log("Phone Book", phoneBook)
    console.log(sortData)
   
    
    function binarySearch(phoneBook, searchName) {
        searchName = searchName.toLowerCase();
        let low = 0;
        let high = phoneBook.length-1;

        while ( low <= high) {
            const mid = Math.floor((low + high)/2);
            const contact = phoneBook[mid];
            const FirstNametoLowerCase = contact.first_name.toLowerCase();

            if (FirstNametoLowerCase === searchName) {
                return contact;
            } else  if (FirstNametoLowerCase < searchName) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        }
        return null
    }

    const searchName = "nDee";
    const result = binarySearch(phoneBook, searchName);
    console.log("Search Result", result)