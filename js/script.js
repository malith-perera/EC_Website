function myFunction() {
  alert("You clicked the coffee cup!");
}

var helloworld = '<pre><code>\n\
    #include "ec.h"\n\n\
\
    int\n\
    main()\n\
    {\n\
        printf("Hello World\\n");\n\
        return 0;\n\
    }\n\
\n\n</code></pre>';

var helloworld_output = '  Hello World!\n';


var lists = '<pre><code>\n\
    #include "ec.h"\n\n\
    typedef struct Student {\n\
        int id;\n\
        char *name;\n\
    } Student;\n\n\
    EC(Student)\n\n\
    int\n\
    main()\n\
    {\n\
        Student *student1 = Student_New();\n\
        Student *student2 = Student_New();\n\
\n\
        *student1 = (Student) {1, "Arnold"};\n\
        *student2 = (Student) {2, "Silvester"};\n\
\n\
        StudentList *student_list = Student_List();\n\
\n\
        Student_Append(student_list, student1);\n\
        Student_Append(student_list, student2);\n\
\n\
        Student *st;\n\
        for_list(student_list, st) {\n\
            printf("Id %d student is %s\\n", st->id, st->name);\n\
        }\n\n\
        return 0;\n\
    }\n\
\n\n</code></pre>';

var list_output = '  Id 1 student is Arnold\n  Id 2 student is Silvester\n';

var arrays = '<pre><code>\n\
    #include "ec.h"\n\n\
    typedef struct Student {\n\
        int id;\n\
        char *name;\n\
    } Student;\n\n\
    EC(Student)\n\n\
    int\n\
    main()\n\
    {\n\
        StudentArray *student_array = Student_Array(2);\n\
\n\
        student_array->var[0] = (Student) {1, "Arnold"};\n\
        student_array->var[1] = (Student) {2, "Silvester"};\n\
\n\
        Student *st;\n\
        for_array(student_array, st) {\n\
            printf("Id %d student is %s\\n", st->id, st->name);\n\
        }\n\n\
        return 0;\n\
    }\n\
\n\n</code></pre>';


var array_output = '  Id 1 student is Arnold\n  Id 2 student is Silvester\n';

function change_code(id) {
    if(id == "helloworld") {
        document.getElementById('helloworld').innerHTML = '<ul style="cursor:pointer" class="boxshadow" onclick="change_code(this.id)" style="cursor:pointer">&lt;&lt; Hello World!</ul>';
        document.getElementById('arrays').innerHTML = '<ul style="cursor:pointer" onclick="change_code(this.id)">Arrays</ul>';
        document.getElementById('lists').innerHTML = '<ul style="cursor:pointer" onclick="change_code(this.id)">Lists</ul>';

        document.getElementById('code_title').innerHTML = 'Hello World!';
        document.getElementById('codes').innerHTML = helloworld;
        document.getElementById('output').innerHTML = helloworld_output;

    }
    if(id == "arrays") {
        document.getElementById('arrays').innerHTML = '<ul style="cursor:pointer" class="boxshadow" onclick="change_code(this.id)">&lt;&lt; Arrays</ul>';
        document.getElementById('helloworld').innerHTML = '<ul style="cursor:pointer" onclick="change_code(this.id)">Hello World!</ul>';
        document.getElementById('lists').innerHTML = '<ul  style="cursor:pointer" onclick="change_code(this.id)">Lists</ul>';

        document.getElementById('code_title').innerHTML = 'Arrays';
        document.getElementById('codes').innerHTML = arrays;
        document.getElementById('output').innerHTML = array_output;
    }
    if(id == "lists") {
        document.getElementById('lists').innerHTML = '<ul class="boxshadow" style="cursor:pointer" onclick="change_code(this.id)">&lt;&lt; Lists</ul>';
        document.getElementById('helloworld').innerHTML = '<ul style="cursor:pointer" onclick="change_code(this.id)">Hello World!</ul>';
        document.getElementById('arrays').innerHTML = '<ul style="cursor:pointer" onclick="change_code(this.id)">Arrays</ul>';

        document.getElementById('code_title').innerHTML = 'Lists';
        document.getElementById('codes').innerHTML = "";
        document.getElementById('codes').innerHTML = lists;
        document.getElementById('output').innerHTML = list_output;
    }
}

