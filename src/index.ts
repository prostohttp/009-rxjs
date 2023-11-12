import { scheduled, from, asyncScheduler } from "rxjs";
import { map } from "rxjs/operators";
// import { ajax } from "rxjs/ajax";

// const data$ = ajax.getJSON(
// 	"https://api.github.com/search/repositories?q=prostohttp"
// );

// data$.subscribe((value: Partial<{[items:string]: any[]}>) => console.log("data$ value", value.items[0].full_name));

const o = scheduled(from([1, 2, 3]), asyncScheduler).pipe(map((el) => el * 2));

o.subscribe((x) => console.log(x));
