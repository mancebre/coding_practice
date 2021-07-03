function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let money = 0;
    let month = 0;
    while (money + startPriceOld < startPriceNew) {
      month += 1;
      
      if (month % 2 === 0) {
        percentLossByMonth += 0.5;
      }

      money += savingperMonth;
      startPriceOld = startPriceOld - pctOfNum(percentLossByMonth, startPriceOld);
      startPriceNew = startPriceNew - pctOfNum(percentLossByMonth, startPriceNew);
    }

    const moneyLeft = Math.round(money + startPriceOld - startPriceNew);
    
    return [month, moneyLeft];
  }
  
  function pctOfNum(pct, number) {
    return pct / 100 * number;
  }

  console.log(nbMonths(2000, 8000, 1000, 1.5), [6, 766])