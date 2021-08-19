function encode(strg){
    let newstrg = "";
    for (index3 = 0; index3 < strg.length; index3 +=1){
      if (strg[index3] === "a"){
        newstrg = newstrg + "1";

      } else if (strg[index3] === "e"){
        newstrg = newstrg + "2";

      } else if (strg[index3] === "i"){
        newstrg = newstrg + "3";

      } else if (strg[index3] === "o"){
        newstrg = newstrg + "4";

      } else if (strg[index3] === "u"){
        newstrg = newstrg + "5";

      } else {newstrg = newstrg + strg[index3];
      }
    }
    return newstrg;
  }

  function decode(strg2) {
    let newstrg2 = "";
    for (index4 = 0; index4 < strg2.length; index4 +=1){
      if (strg2[index4] === "1"){
        newstrg2 = newstrg2 + "a";

      } else if (strg2[index4] === "2"){
        newstrg2 = newstrg2 + "e";

      } else if (strg2[index4] === "3"){
        newstrg2 = newstrg2+ "i";
        
      } else if (strg2[index4] === "4"){
        newstrg2 = newstrg2 + "o";

      } else if (strg2[index4] === "5"){
        newstrg2 = newstrg2 + "u";

      } else {newstrg2 = newstrg2 + strg2[index4];
      }
    }
    return newstrg2;
  }

  module.exports = encode;