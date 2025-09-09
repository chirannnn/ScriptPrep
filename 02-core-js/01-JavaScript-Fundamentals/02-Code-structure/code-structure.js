// ✅ Statements
alert("Hello, world!");

// ✅ Multiple statements (inline vs separate lines)
alert("Hello");
alert("World");
alert("Hello");
alert("World");

// ✅ Automatic Semicolon Insertion (ASI)
alert("This works without semicolon");
alert("But careful with tricky cases");

// ⚠️ ASI Pitfall
alert(3 + 1 + 2); // Outputs 6

// ❌ Common ASI bug
// alert("Hello")
// [1, 2].forEach(alert); // Uncomment to see error

// ✅ Corrected
alert("Hello");
[1, 2].forEach(alert);

// ✅ Comments
// Single-line comment
alert("Comment example");

/* Multi-line comment
   Still works fine */
alert("Multi-line comment example");

// ❌ Nested comments not allowed
/*
  /* This will break */
