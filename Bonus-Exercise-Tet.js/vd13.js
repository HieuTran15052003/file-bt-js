function validate(fullName) {
    if(!fullName.firstName)
    return false;
    if(!fullName.lastName)
    return false;
    return true;
    }
    console.log(validate({firstName: 'Duy', lastName: 'Buffet'}));