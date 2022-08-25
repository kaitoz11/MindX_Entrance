function alternatingSums(arr=[]){
    let team1=0, team2=0
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            team1+=arr[i]
        }else{
            team2+=arr[i]
        }
    }
    return [team1,team2]
}

arr=[60,40,55,75,64]

console.log(alternatingSums(arr))