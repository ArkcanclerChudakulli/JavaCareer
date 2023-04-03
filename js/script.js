let money = 0;
let questions_count = 0;
let correctAnswer;
let correct = 0;
let options;
let skill = 'Английский язык';

function mirror(txt, speed = 20, color){
$('#mirror_txt').replaceWith( '<marquee id="mirror_txt" class="font text-center align-middle ' + color + '" direction="up" scrolldelay="1" scrollamount="' + speed + '" behavior="slide"><font id="road_text">' + txt + '</font></marquee>' );
}

function mirror_eval(txt, speed = 20, color){
$('#eval_txt').replaceWith( '<marquee id="eval_txt" class="font text-center align-middle ' + color + '" direction="up" scrolldelay="1" scrollamount="' + speed + '" behavior="slide"><font id="road_text">' + txt + '</font></marquee>' );
}

function choose(num){
	if(options[num-1] == correctAnswer){
		mirror_eval('Верно', 20, "green");
		correct++;
		win();
	} else {
		mirror_eval('Неверно. Правильный ответ: "' + correctAnswer + '"', 20, "red");
	}
	next();
}

function next(){
	if(questions_count>=questions.length-1){
		$('.game_button').prop('disabled', true);
		let overall = questions.length;
		let percent = calculatePercent(correct,overall);
		let msg = 'Вы правильно ответили: ' + percent + '%('
		+ correct + '/' + overall + ').';
		let color = 'red';
		if(percent>=65){
			skill+=',<br>Основы Java';
			$('#skill').html(skill);
			color = 'green';
			msg+=' Поздравляем! Вы освоили "Основы Java".'; 
		} else{
			msg+=' Попробуйте ещё раз.'
		}
		mirror(msg, 20, color);
		emptyOptions();
		questions_count=0;
		shuffle(questions);
	} else {
		questions_count++;
		mirror(questions[questions_count].definition, 20, 'blue');
		randomAnswers();
	}
}

function calculatePercent(correct,overall){
	let num = correct/overall*100;
	return parseFloat(num).toFixed(0);
}

function win(){
	$('#money').html(new Intl.NumberFormat().format(money+=5000));
	levelup();
}

function levelup(){
	if(money>180000) $('#status').html('Синьор');
	else if(money>120000) $('#status').html('Мидл');
	else if(money>60000) $('#status').html('Джуниор');
	else if(money>0) $('#status').html('Стажёр');
}

function toggle(){
	if($('#learn').is('[disabled]')){
		$('#learn').prop('disabled', false);
		$('.game_button').prop('disabled', true);
	} else {
		$('#learn').html('Java Career');
		$('#learn').prop('disabled', true);
		$('.game_button').prop('disabled', false);
	}
}

function learn(){
	$('#game').show();
	toggle();
	randomAnswers();
	mirror(questions[questions_count].definition, 20, 'blue');
}

function randomAnswers(){
	correctAnswer = questions[questions_count].options[0];
	options = questions[questions_count].options;
	shuffle(options);
	$('#first').html(options[0]);
	$('#second').html(options[1]);
	$('#third').html(options[2]);
	$('#forth').html(options[3]);
}

function emptyOptions(){
	$('#first').html('');
	$('#second').html('');
	$('#third').html('');
	$('#forth').html('');
}

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

let questions = [
		 {
			definition: 'Какой Interface НЕ наследуется от интерфейса Collection?',
			options: ['Map',
					  'List',
					  'Queue',
					  'Set']
		},
		{
			definition: 'Какой return type у методов add и remove интерфейса Collection?',
			options: ['boolean',
					  'void',
					  'int',
					  'T']
		},
		{
			definition: 'Какого метода НЕТ в интерфейсе List?',
			options: ['put',
					  'get',
					  'set',
					  'indexOf']
		},
		{
			definition: 'Какой метод у функционального интерфейсе Predicate?',
			options: ['test',
					  'apply',
					  'get',
					  'accept']
		},
		{
			definition: "Какой scope стоит у Bean'ов в Spring'e по умолчанию?",
			options: ['Singleton',
					  'Prototype',
					  'Request',
					  'Session']
		},
		{
			definition: "Какого ApplicationContext НЕ существует в Spring'e?",
			options: ['SimpleApplicationContext',
					  'FileSystemXmlApplicationContext',
					  'ClassPathXmlApplicationContext',
					  'WebApplicationContext']
		},
		{
			definition: "Какая аннотация НЕ входит в @SpringBootApplication?",
			options: ['@SpringApplication',
					  '@EnableAutoConfiguration',
					  '@ComponentScan',
					  '@Configuration']
		},
		{
			definition: "Где НЕЛЬЗЯ использовать аннотацию @Autowired?",
			options: ['Перед классом',
					  'Перед полем',
					  'Перед конструктором',
					  'Перед аргументом конструктора']
		},
		{
			definition: "Какой по умолчанию load factor для HashMap?",
			options: ['0.75',
					  '0.5',
					  '0.25',
					  '1']
		},
		{
			definition: "Сколько Bucket'ов по умолчанию у HashMap?",
			options: ['16',
					  '8',
					  '4',
					  '32']
		},
		{
			definition: "Сколько битов в hash-функции MD5?",
			options: ['128',
					  '256',
					  '64',
					  '32']
		},
		{
			definition: "Какая hash-функции используется для Bitcoin?",
			options: ['SHA256',
					  'MD5',
					  'MD4',
					  'CRC-32']
		},
		{
			definition: "Сколько рекомендуется делать партиций относительно сервисов (consumers) в Kafka?",
			options: ['По 4 на сервис',
					  'По 1 на сервис',
					  'По 10 на сервис',
					  'По 40 на сервис']
		},
		{
			definition: "Сколько рекомендуется делать минимально реплик в Kafka для обеспечения отказоустойчивости?",
			options: ['3 реплики',
					  '8 реплик',
					  '16 реплик',
					  '32 реплики']
		},
		{
			definition: "Какого метода НЕТ в интерфейсе Map?",
			options: ['deleteIfExists',
					  'entrySet',
					  'putIfAbsent',
					  'getOrDefault']
		},
		{
			definition: "В какой версии Java появилось ключевое слово var?",
			options: ['10',
					  '9',
					  '8',
					  '11']
		},
		{
			definition: "Какой элемент отсутствует в Node (внутренняя имплементация HashMap)?",
			options: ['Node <K,V> previous',
					  'int hash',
					  'Node <K,V> next',
					  'V value']
		},
		{
			definition: "По какой формуле в HashMap вычисляется индекс Bucket'a?",
			options: ['hash & (n - 1)',
					  'hash | (n - 1)',
					  'hash % (n - 1)',
					  'hash ^ (n - 1)']
		},
		{
			definition: "Какая алгоритмическая сложность у collision resolution mechanism, введённого в 8 версии Java для HashMap?",
			options: ['O(log(n))',
					  'O(n)',
					  'O(1)',
					  'O(n²)']
		},
		{
			definition: "Какая http ошибка (Client Error) имеет код 400?",
			options: ['Bad Request',
					  'Unauthorized',
					  'Forbidden',
					  'Not Found']
		},
		{
			definition: "Какую аннотацию нужно использовать для создания custom exception в Spring Boot?",
			options: ['@ResponseStatus',
					  '@ResponseStatusException',
					  '@CustomException',
					  '@Exception']
		},
		{
			definition: "Что нужно прописать в application.properties, чтобы Spring Boot включил message в тело Response'a?",
			options: ['server.error.include-message=always',
					  'client.error.include-message=always',
					  'server.error.include-message=true',
					  'client.error.include-message=true']
		},
		{
			definition: "Какой метод класса Optional принимает в качестве аргумента Supplier?",
			options: ['orElseGet',
					  'orElse',
					  'ofNullable',
					  'ifPresent']
		},
		{
			definition: "Какая из этих аннотаций Spring'a предназначена для Bean'a, выполняющего бизнес-логику?",
			options: ['@Service',
					  '@Component',
					  '@Controller',
					  '@Repository']
		},
		{
			definition: "Выберете верное утверждение касательно @PostConstruct и @PreDestroy методов в Spring'е?",
			options: ['Не могут иметь аргументов',
					  'Обязаны быть public',
					  'Обязаны возвращать void',
					  'Должны называться init и destroy']
		},
		{
			definition: "Какой принцип скрывается за буквой S в аббревиатуре SOLID?",
			options: ['Принцип единственной ответственности',
					  'Принцип открытости/закрытости',
					  'Принцип подстановки Лисков',
					  'Принцип разделения интерфейса']
		},
		{
			definition: "Какой принцип скрывается за буквой O в аббревиатуре SOLID?",
			options: ['Принцип открытости/закрытости',
					  'Принцип инверсии зависимостей',
					  'Принцип подстановки Лисков',
					  'Принцип разделения интерфейса']
		},
		{
			definition: "Какой принцип скрывается за буквой L в аббревиатуре SOLID?",
			options: ['Принцип подстановки Лисков',
					  'Принцип инверсии зависимостей',
					  'Принцип единственной ответственности',
					  'Принцип разделения интерфейса']
		},
		{
			definition: "Какой принцип скрывается за буквой I в аббревиатуре SOLID?",
			options: ['Принцип разделения интерфейса',
					  'Принцип инверсии зависимостей',
					  'Принцип единственной ответственности',
					  'Принцип открытости/закрытости']
		},
		{
			definition: "Какой принцип скрывается за буквой D в аббревиатуре SOLID?",
			options: ['Принцип инверсии зависимостей',
					  'Принцип разделения интерфейса',
					  'Принцип единственной ответственности',
					  'Принцип открытости/закрытости']
		},
		{
			definition: "Что мы должны указать в скобках к аннотации @Autowired, если Bean не обязателен?",
			options: ['(required=false)',
					  '("optional")',
					  '(min=0)',
					  '(mandatory=false)']
		},
		{
			definition: "Какой аннотацией нужно пометить поле в JPA, чтобы оно НЕ сохранялось в базу данных?",
			options: ['@Transient',
					  '@Temporal',
					  '@NonPersistent',
					  '@Volatile']
		},
		{
			definition: "Какой метод в JPA вернёт detached объект под контроль EntityManager?",
			options: ['merge',
					  'attach',
					  'persist',
					  'reattach']
		},
		{
			definition: "Какое свойство мы должны добавить в аннотацию при указании CascadeType.REMOVE, чтобы при нарушении связи с parent объектом зависимые элементы были удалены?",
			options: ['orphanRemoval=true',
					  'childRemoval=true',
					  'dependentRemoval=true',
					  'subElementRemoval=true']
		},
		{
			definition: "Какой минимальный уровень изоляции транзакций защищает от Dirty Read?",
			options: ['Read Commited',
					  'Read Uncommited',
					  'Repeatable Read',
					  'Serializable']
		},
		{
			definition: "Какой минимальный уровень изоляции транзакций защищает от Nonrepeatable Read?",
			options: ['Repeatable Read',
					  'Read Uncommited',
					  'Read Commited',
					  'Serializable']
		},
		{
			definition: "Какой минимальный уровень изоляции транзакций защищает от Phantom Read?",
			options: ['Serializable',
					  'Read Uncommited',
					  'Read Commited',
					  'Repeatable Read']
		},
		{
			definition: "Как создать Daemon поток?",
			options: ['Вызвать метод setDaemon(true)',
					  'Унаследоваться от класса Daemon',
					  'Имплементировать интерфейс Daemon',
					  'Вызвать метод daemon()']
		},
		{
			definition: "Какой из этих методов класса Thread статический?",
			options: ['interrupted()',
					  'interrupt()',
					  'isInterrupted()',
					  'isAlive()']
		},
		{
			definition: "Какой из этих методов класса Thread НЕ выбрасывает InterruptedException?",
			options: ['interrupt()',
					  'sleep()',
					  'join()',
					  'wait()']
		},
		{
			definition: "Какой из этих методов класса Thread заставит процессор переключиться на обработку других потоков?",
			options: ['yield()',
					  'sleep()',
					  'notify()',
					  'wait()']
		},
		{
			definition: "Каким может быть максимальный приоритет в классе Thread?",
			options: ['10',
					  '5',
					  '16',
					  '100']
		},
		{
			definition: "Какого состояния потока НЕ существует?",
			options: ['IN PROGRESS',
					  'NEW',
					  'RUNNABLE',
					  'TERMINATED']
		},
		{
			definition: "Как называется программирование, когда каждая следующая задача не ждёт окончания предыдущей?",
			options: ['Асинхронное',
					  'Синхронное',
					  'Параллельное',
					  'Многопоточное']
		},
		{
			definition: "Если у нас 1 поток записывает данные в переменную, а другие из неё читают, какое ключевое слово поможет нам обеспечить актуальность значения переменной?",
			options: ['volatile',
					  'synchronized',
					  'transient',
					  'static']
		},
		{
			definition: "Какой из этих методов освобождает монитор?",
			options: ['Wait',
					  'Sleep',
					  'Notify',
					  'NotifyAll']
		},
		{
			definition: "Как называется ситуация, когда менее приоритетные потоки ждут слишком долгое время, прежде чем могут запуститься?",
			options: ['Lock starvation',
					  'Deadlock',
					  'Livelock',
					  'Collision']
		},
		{
			definition: "Какого метода нет в интерфейсе Lock?",
			options: ['isLocked',
					  'lock',
					  'unlock',
					  'tryLock']
		},
		{
			definition: "Что произойдёт, если после старта User Thread потока вызвать метод setDaemon(true)?",
			options: ['Будет выброшено исключение IllegalThreadStateException',
					  'Поток станет Daemon',
					  'Ничего не произойдёт',
					  'Поток остановится']
		},
		{
			definition: "Что рекомендуется использовать для того, чтобы прервать один поток из другого потока?",
			options: ['Методы interrupt() и isInterrupted()',
					  'Метод stop()',
					  'throw InterruptedException',
					  'Метод terminate()']
		},
		{
			definition: "Какой метод ExecutorService нужно использовать, чтобы подождать окончания работы потоков ThreadPool'a?",
			options: ['awaitTermination',
					  'wait',
					  'join',
					  'shutDown']
		},
		{
			definition: "Какого параметра НЕТ в методе scheduleAtFixedRate класса ScheduledThreadPool?",
			options: ['Callable<V> callable',
					  'long initialDelay',
					  'long period',
					  'TimeUnit unit']
		},
		{
			definition: "Что произойдёт, если у объекта Future вызвать метод get, когда результат из другого потока ещё не получен?",
			options: ['Поток заблокируется и будет ждать результат',
					  'Вернётся null',
					  'Поток продолжит работу',
					  'Выбросится исключение']
		},
		{
			definition: "Какого метода НЕТ в синхранизаторе Semaphore?",
			options: ['countDown()',
					  'acquire()',
					  'release()',
					  'isFair()']
		},
		{
			definition: "Какой метод синхранизатора CountDownLatch нужно использовать в методе run потоков для их приостановки, пока счётчик не достигнет 0?",
			options: ['await()',
					  'acquire()',
					  'tryAcquire()',
					  'wait()']
		},
		{
			definition: "Какой класс можно использовать для того, чтобы 2 потока могли одновременно получить друг от друга данные?",
			options: ['Exchanger',
					  'CountDownLatch',
					  'Semaphore',
					  'Future']
		},
		{
			definition: "В какую область памяти попадёт объект, если он пережил хотя бы 1 сборку мусора?",
			options: ['Survivor',
					  'Eden',
					  'Tenured',
					  'Permanent generation']
		},
		{
			definition: "Какого из этих Garbage Collector'ов не было до 7 Java?",
			options: ['G1 Garbage Collector',
					  'Parallel Garbage Collector',
					  'CMS Garbage Collector',
					  'Serial Garbage Collector']
		},
		{
			definition: "В какой компонент Spring'a входит AOP?",
			options: ['Это отдельный компонент',
					  'В Spring Core',
					  'В Spring Data',
					  'В Spring Web']
		},
		{
			definition: "На какой стадии жизни Bean'a отработает BeanPostProcessor?",
			options: ['Pre-Initialization',
					  'Instantiation',
					  'Populating properties',
					  'AfterPropertiesSet']
		},
		{
			definition: "Какой параметр аннотации @Query нужно указать, чтобы использовать SQL?",
			options: ['nativeQuery = true',
					  'language = "sql"',
					  'sql = true',
					  'jpql = false']
		},
		{
			definition: "Какого параметра НЕТ в методе toPredicate интерфейса Specification, относящегося к Spring Data?",
			options: ['Predicate<T> predicate',
					  'Root<T> root',
					  'CriteriaQuery<?> query',
					  'CriteriaBuilder criteriaBuilder']
		},
		{
			definition: "Какое значение параметра Propagation аннотации @Transactional стоит по умолчанию?",
			options: ['required',
					  'supports"',
					  'requires_new',
					  'never']
		},
		{
			definition: 'Что произойдёт, если к началу вызова метода с аннотацией @Transactional(propagation="supports") у нас нет активной транзакции?',
			options: ['Метод отработает без транзакции',
					  'Создастся новая транзакция',
					  'Будет выброшено исключение',
					  'Метод будет проигнорирован']
		},
		{
			definition: "Какое значение параметра Propagation аннотации @Transactional нужно использовать, чтобы метод выполнился в отдельной транзакции?",
			options: ['requires_new',
					  'supports"',
					  'required',
					  'mandatory']
		},
		{
			definition: "Какое значение параметра Propagation аннотации @Transactional нужно использовать, чтобы в случае ROLLBACK'a мы могли вернуться к Save Point?",
			options: ['nested',
					  'supports',
					  'never',
					  'mandatory']
		},
		{
			definition: 'Что произойдёт, если к началу вызова метода с аннотацией @Transactional(propagation="mandatory") у нас нет активной транзакции?',
			options: ['Будет выброшено исключение',
					  'Создастся новая транзакция',
					  'Метод отработает без транзакции',
					  'Метод будет проигнорирован']
		},
		{
			definition: 'Что произойдёт, если к началу вызова метода с аннотацией @Transactional(propagation="required") у нас нет активной транзакции?',
			options: ['Создастся новая транзакция',
					  'Будет выброшено исключение',
					  'Метод отработает без транзакции',
					  'Метод будет проигнорирован']
		},
		{
			definition: 'Что произойдёт, если из нетранзакционного метода вызвать метода с аннотацией @Transactional(propagation="required")?',
			options: ['Метод отработает без транзакции',
					  'Создастся новая транзакция',
					  'Будет выброшено исключение',
					  'Метод будет проигнорирован']
		},
		{
			definition: 'Какой из этих компонентов MVC отвечает за выбор отображения данных модели?',
			options: ['View Resolver',
					  'Controller',
					  'DispatcherServlet',
					  'Handler Mapping']
		},
		{
			definition: 'Какую аннотацию включает в себя @RestController по сравнению с @Controller?',
			options: ['@ResponseBody',
					  '@RequestMapping',
					  '@GetMapping',
					  '@Http']
		},
		{
			definition: "Что по умолчанию НЕ предосталяет Spring Boot по сравнению со Spring'ом?",
			options: ['JUnit',
					  'Автоконфигурация для Jackson',
					  'Tomcat',
					  'Специальный файл для конфигурации DataSource']
		},
		{
			definition: "Какой класс/интерфейс Spring'а выполняет самую первую стадию подготовки Bean'ов?",
			options: ['XmlBeanDefinitionReader',
					  'ClassPathXmlApplicationContext',
					  'BeanPostProcessor',
					  'BeanFactory']
		},
		{
			definition: "В какой момент в Spring'е создаются prototype-Bean'ы?",
			options: ['Когда к ним происходит обращение в коде',
					  'Когда поднимается Spring Context',
					  "Сразу после Singleton-Bean'ов",
					  "До Singleton-Bean'ов"]
		},
		{
			definition: "Где хранятся инстансы prototype-Bean'ов?",
			options: ['Нигде',
					  "В Spring Container'е",
					  "В BeanFactory",
					  "В Spring Context'е"]
		},
		{
			definition: "В какой момент BeanPostProcessor донастраивает Bean'ы?",
			options: ['До того как они попадают в Spring Container',
					  "Сразу после того, как они помещаются в Spring Container",
					  "В зависимости от настроек, указанных в SpringApplication.properties",
					  "Не детерменировано"]
		},
		{
			definition: "Какой из этих методов есть в интерфейсе BeanPostProcessor?",
			options: ['postProcessBeforeInitialization',
					  "init",
					  "postConstruct",
					  "preDestroy"]
		},
		{
			definition: 'Что будет, если в XML properties файл добавить "context:annotation-config"?',
			options: ["Spring создаст Bean'ы для BeanPostProcessor'ов",
					  "Ничего не произойдёт",
					  "Spring добавит аннотацию @Autowired для всех полей всех Bean'ов",
					  "Spring будет использовать Bean с аннотацией @Configuration вместо XML properties"]
		},
		{
			definition: "Что произойдёт, если при использовании HTTP метода PUT указанного ресурса не существует?",
			options: ['Он будет создан',
					  "Ничего не произойдёт",
					  'Error 400 "Bad Request"',
					  'Error 404 "Resource not found"']
		},
		{
			definition: "Что мы будем использовать для 3 фазы 3-фазового конструктора при настройке Bean'a в Spring'e?",
			options: ['ContextListener',
					  "Обычный конструктор Java",
					  '@PostConstruct',
					  "В Spring'e нельзя написать 3-фазовый конструктор"]
		},
		{
			definition: "В какой момент жизненного цикла Bean'a в Spring'e отработает BeanFactoryPostProcessor?",
			options: ["После BeanDefinitionReader'a, но до BeanFactory",
					  "До BeanDefinitionReader'a",
					  "После BeanFactory, но до BeanPostProcessor'а",
					  "После BeanPostProcessor'а"]
		},
		{
			definition: "Чем в Spring'e является ClassPathBeanDefinitionScanner?",
			options: ["ResourceLoaderAware",
					  "BeanFactoryPostProcessor",
					  "BeanPostProcessor",
					  "XmlBeanDefinitionReader"]
		},
		{
			definition: "Чем в Spring'e является ConfigurationClassPostProcessor?",
			options: ["BeanFactoryPostProcessor",
					  "ResourceLoaderAware",
					  "BeanPostProcessor",
					  "XmlBeanDefinitionReader"]
		},
		{
			definition: "Кто в Spring'e регистрирует ConfigurationClassPostProcessor?",
			options: ["AnnotationConfigApplicationContext",
					  "XmlApplicationContext",
					  "ClassPathBeanDefinitionScanner",
					  "XmlBeanDefinitionReader"]
		},
		{
			definition: "Какой интерфейс Spring'а нужно имплементировать, чтобы создать custom scope?",
			options: ["BeanFactoryPostProcessor",
					  "ApplicationContext",
					  "BeanPostProcessor",
					  "BeanDefinitionReader"]
		}
];
 
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function load(){
	shuffle(questions);
	mirror('Для изучения Java Вам нужно будет ответить на вопросы (1 правильный вариант ответа из 4)', 3, 'black');
}