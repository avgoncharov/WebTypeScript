//Изучаю как работать с get/set.
export class Data
{
	private someDataVal: string;

	get someData() : string{
		console.log("Get SomeData.");
		return this.someDataVal;
	}

	set someData(value: string) {
		console.log("Set SomeData.");
		this.someDataVal = value;
	}
}