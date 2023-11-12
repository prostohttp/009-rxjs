import { ajax } from "rxjs/ajax";
import { throwError } from "rxjs/internal/observable/throwError";
import { catchError, tap } from "rxjs/operators";

const rxJsRequestHandler = (url: string, query: string) => {
	const data$ = ajax
		.getJSON(`${url}${query}`)
		.pipe(
			tap((data: { [total_count: string]: number | string }) => {
				if (data.total_count == 0 || Array.isArray(data) && !data.length) {
					throw new Error("No data"); // Генерирование ошибки с помощью throw new Error()
				}
			}),
			catchError((err): any => {
				console.log("error", err);
				return throwError(err); // Перехват ошибки и повторное генерирование
			})
		);

	data$.subscribe((data) => {
		console.log("data", data);
	});
};

rxJsRequestHandler(
	"https://api.github.com/search/repositories?q=",
	"prostohttp"
);

rxJsRequestHandler(
	"https://gitlab.com/api/v4/projects?search=",
	"vue"
);

