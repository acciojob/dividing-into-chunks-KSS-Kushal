const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 const ans = new Array();
  let temp = new Array();
  arr.forEach((v, i)=>{
      if(getTotal(temp)+v<=n){
          temp.push(v);
      }else{
          ans.push(temp);
          temp = new Array();
          temp.push(v);
      }
      if(i===arr.length-1){
          ans.push(temp)
      }
  })
  return ans;
};

const getTotal = (arr) => {
    let total = 0;
    arr.forEach((v)=>{
        total += v;
    });
    return total;
}

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
