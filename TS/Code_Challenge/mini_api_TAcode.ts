// 개요
// 이번 챌린지는 그간 배웠던 제네릭과 타입의 다양한 선언 방법 그리고 추상화 클래스를 복합적으로 다뤄볼 수 있는 챌린지였습니다. 이번 챌린지를 통해 여러분들은
// 추상화 클래스와 제네릭을 함께 가공하여 새로운 API를 만들 수 있습니다.
// overloading을 이용하여 다양한 타입으로 이루어진 API를 만들 수 있습니다.
// 해설
// LocalStorage API
// 먼저 로컬 스토리지에 들어갈 아이템들의 타입을 설정해주어야 합니다. 이번에는 interface를 사용해보도록 하겠습니다. interface의 경우 상속이 굉장히 용이한 타입 식별자입니다.
// 로컬 스토리지 내부에 저장되는 데이터는 key: value쌍의 값으로 저장이 됩니다. 또한, 인풋의 타입이 어떻게 되느냐에 따라 아웃풋의 타입도 유동적으로 변할 수 있도록 제네릭을 함께 설정해주어 Items라는 타입을 만들었습니다.
// 다음으로 추상화 클래스를 만들어 볼 차례입니다. 추상화를 시킬 땐 abstract라는 키워드를 사용합니다. 앞서 만들었던 Items라는 타입을 protected 키워드를 이용해 오직 하위 클래스에서만 접근 가능하도록 items라는 객체 필드에 타입을 지정해주었습니다. 그리고 나머지 메소드들 또한 전부 abstract로 연결시켜주었으며, 제네릭을 활용하였습니다.
// 마지막으로 실제 API로 사용될 SuperStorage라는 임의의 이름을 가진 새로운 클래스를 만들고 extends라는 키워드를 이용해 앞서 만든 추상화 클래스를 상속시켜 주었습니다. 모범 답안에서는 모든 메소드에 대해 접근이 가능하도록 public 키워드를 사용해주었습니다.
// GeoLocation API
// overloading을 활용하는 챌린지였습니다. overloading은 글자 그대로 이름은 동일하되 서로 다른 타입들을 덧붙이는 것이라고 이해하면 쉽습니다.
// 먼저 GeolocationCoordinates의 타입을 설정해주겠습니다. GeoLocation은 사용자의 로컬 컴퓨터의 위치를 좌표 형식으로 나타내줍니다. 사용법에 있는 메소드로 전달된 파라미터들 중에 각각 optionsObj, errors, option 등은 전부 객체 형태인 것을 유추할 수 있습니다. 그렇기 때문에 각각 GeoOptions, GeoError, GeolocationCoords 그리고 Position이라는 타입을 각각 만들어서 필요한 필드들이 담긴 타입을 만들었습니다.
// 다음으로 successFn, errorFn의 콜백 함수에 대한 타입을 설정할 차례입니다. 앞서 만든 GeoOptions, GeoError, GeolocationCoords 그리고 Position을 successFn과 errorFn의 파라미터에 적용시킬 타입으로 사용합니다. 그렇게 SuccessFunction과 ErrorFunction이라는 타입을 만들었습니다.
// 이후, 사용법에 제시된 getCurrentPosition()과 watchPosition() 메소드의 전체 타입을 지정하도록 하겠습니다. 앞서 만든 SuccessFunction 타입과 ErrorFunction을 연결 지을 수 있도록 GetCurrentPosition과 WatchCurrentPosition 타입을 만든 후, return되는 타입을 설정해주고, 이를 하나로 묶은 GeolocationAPI라는 interface를 만들었습니다. 추후에 상속을 해야하니까요.
// 마지막으로 Geolocator라는 클래스를 만들었습니다. 이것이 실제로 API로 사용될 클래스이며 GeolocationAPI 타입을 연결합니다. getCurrentPosition()과 watchPosition() 메소드에서 전달되는 error와 options는 없을 수도 있기 때문에 ? 연산자를 통해 필수가 아닌 선택적인 요소로 바꾸었습니다.
