function getNameInitials(nameSurname){
    const name = nameSurname.split(' ');
    const initials = name[0][0]+name[1][0];
    return initials;
}