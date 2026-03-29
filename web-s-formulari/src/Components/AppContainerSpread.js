import React, { Component } from "react";
import Detail from "./Spread/Detail";
class AppContainerSpread extends React.Component {
  render() {
    var person = {
      name: "User",
      age: 22,
    };

    return (
      <div>
        <Detail {...person} title="Dear" />
      </div>
    );
  }
}

export default AppContainerSpread;

/**
 *
Co je operátor Spread?
Operátor Spread je funkce JavaScriptu zavedená v ES6, která se používá k práci (rozložení) iterovatelných položek.
Syntaxe tří teček (...) se používá u dvou operátorů, tj. operátoru Spread a parametru Rest. Operátor Spread
umožňuje rozložit iterovatelný objekt, jako je objekt, řetězec nebo pole, na jeho prvky, zatímco operátor Rest
provádí opak redukcí sady prvků do jednoho pole.
 *
 */
