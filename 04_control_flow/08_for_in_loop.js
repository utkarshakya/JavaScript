// --- for in ---
const languages = {
    py: "Python",
    js: "Javascript",
    cpp: "C++"
}

for (const key in languages) {
    console.log(`.${key} is a extension of ${languages[key]}`);
}
// We can use for in loop on objects and it also works other as well.
// Easily see the output of above code.

// Using with arrays
const villains = ["Ultron","Thanos","Dr. Doom", "Kang"];
for(const key in villains){
    console.log(villains[key]);
}
// This how we can simply use it with arrays.

// NOTE: Maps are not iterable with for in loop.
// We can use for in loop with objects and arrays.
// But it's not recommended to use for in loop with arrays, as it can also iterate to inherited properties.
// Which can be a problem sometimes. So, use it with objects only.
// We'll discuss maps in detail later.
// That's it for now.

// TO KNOW MORE ABOUT INHERITED PROPERTIES AND THE OBJECT DESCRIPTORS 
// CHECK THE 'Object_Descriptors.md' FILE IN THE FOLDER NAMELY 'Extra'.