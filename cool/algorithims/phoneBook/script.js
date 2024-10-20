const data = [
    {"first_name":"Andee","last_name":"Ogles","phone":"(531) 8435492","gender":"Female","picture":"http://dummyimage.com/172x100.png/ff4444/ffffff"},
    {"first_name":"Berri","last_name":"Kinforth","phone":"(535) 9255883","gender":"Female","picture":"http://dummyimage.com/244x100.png/dddddd/000000"},
    {"first_name":"Shantee","last_name":"Sterndale","phone":"(640) 1705736","gender":"Female","picture":"http://dummyimage.com/133x100.png/5fa2dd/ffffff"}
    
    ];

    const phoneBook = [];

    // sorting or array of objects so as to run binary search

    const sortData = data.sort((a, b) =>  a.first_name.localeCompare(b.first_name));
    return phoneBook.push(...data);