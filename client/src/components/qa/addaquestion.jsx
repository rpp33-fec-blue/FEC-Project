  //Click add a question
    // must open an overlays form

  //Click X at the top of the form
    // should close and overlay form

  //Click submit
    // if no input in mandatory field questions/nickname/email
      // the formContent are all unmounted
      // show error message "You must enter the following: questions/nickname/email"
      // return

    // if input in mandatory field
      // if email address in correct format have @ in the middle have  . after @
        // submit form
        // the formContent are all unmounted
        // show complete message
        // return
      // if not
        // the formContent are all unmounted
        // show error message "You must enter the following: email in a correct format"
        // return