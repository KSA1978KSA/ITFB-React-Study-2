import React, {useState} from 'react';
import "./styles.css";


//--- объявляем типы данных передаваемые в компоненту
type propSymbol = {
    symbol: string
};


function Box ({symbol} : propSymbol) {

	return (
		<div className='element'>{symbol}</div>
	)
}


function Root () {
	

	//---- Хук для строки ввода
	const [inputValue, inputValueCallBack] = useState("Привет");

	//---- Хук для результата
	const [resultValue, resultValueCallBack] = useState("");

	//--- функция для записи измененного значения в Input
	function changeInputText(event : React.ChangeEvent<HTMLInputElement>) {
		inputValueCallBack(event.target.value);
		resultValueCallBack("");
		//console.log (event.target.value);
	}

	return (
		<div className='root'>
			    <div className='root-container'>


					<div className='input-container'>
						<div className='input-title'>
							<div>Поле ввода:</div>
						</div>
						<div className='input-wrapper' >
							<input 	
								className='input-value'													
								value={inputValue}
								onChange={changeInputText}
							></input>
						</div>
					</div>

					<div className='array-container'>						
					{
						Array.from(inputValue).map ((element, index) => {
                            return (
									<div									 
										onClick={() => 
											{                                   
											console.log (element);
											resultValueCallBack(resultValue+element);
											}
									}
										>
										<Box 
											symbol={element}
											key={index} //--- ключ нужен для избежания ошибки "Each Child in a List Should Have a Unique 'key' Prop"																			
										/>									
									</div>)						                        
						})
					}
					</div> 

					<div className='result-container'>
						<div className='result-title'>
							<div>Результат:</div>
						</div>
						<div className='result-wrapper' >
							<div className='result-value' >
								{resultValue}
							</div>
						</div>
					</div> 
				</div>     
		</div>
	)
}
export {Root};      
    
