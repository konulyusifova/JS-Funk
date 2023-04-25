// Methodlar yaradirsiz. Methoda ad gonderende adi ekrana cixardir(Sabir), ad ve soyad gonderende soyadi adi ekrana cixardir(Guliyev Sabir), ad,soyad ve ata adı göndərildikdə adin baş hərfi nöqtə soyad ata adi ekrana cixardirsiz(S.Guliyev Mehti). Methodlarin adi eyni olmalıdır.

var name=prompt("Adınızı daxil edin:");
function person(){
    return name;
}
console.log(name)


var surname=prompt("Soyadınızı daxil edin:");
function person() {
    return name + " " + surname;
}
console.log(name + " " + surname)


var fathername=prompt("Ata adını daxil edin:")
function person() {
    return fathername;
}
console.log(name[0] + "." + surname + " " + fathername)