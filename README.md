A tool for managing my job applications' records. You just need to use the `app.js` using:
```bash
node app.js
```
How it works:
Run it in the folder you want to work on, then create a directory with a `-` since I put the job I applied for in the following format: Company - Job Title. Will move all directories with `-` into a subdirectory named the name of the current month. It will also copy any files named `Cover Letter.docx` and `Resume.docx` into the moved folder as well as making a new `link.txt` for me to populate. Will remove the original directory. 

This program will run in a loop and once you stop applying for jobs close and resume it next time. **Same directory names in the same month will be overrwritten**.