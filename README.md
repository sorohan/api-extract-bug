# Reproduce API extractor bug

Expected result:

 - after extracting the API, the "check" command should pass
   ```
   npm run extract
   npm run check
   echo $?
   ```
 - Expected to see exit code 0
 - Actual result: exit code 1

