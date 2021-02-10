
class LoadingHelper {
  static LoadAsset(fetchData: Promise<{}>, effect: Function, type: string) {
    console.log(4);
    let time1 = new Date().getTime();
    fetchData.then((result: any) => {
      console.log("after being set");
      console.log(result);
      let time2 = new Date().getTime();
      let loadingTime = 100;
      if (type === "article") {
        loadingTime = 100;
      } else if (type === "article-list") {
        loadingTime = 300;
      }
      console.log(time2-time1);
            console.log(5);
      if (time2 - time1 < loadingTime) {
        console.log(5.1);
        setTimeout(() => {
            effect(result);
          }, loadingTime - (time2 - time1));
      }
      else{
        console.log(5.2);
        effect(result);
      }

    });
    console.log("TEST")
  }
}

export default LoadingHelper;
