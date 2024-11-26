export const faqDataRu = [
    {
        title: 'Что показывает проверка AMLBot?',
        description: `<p>Базовый результат проверки AMLBot включает процент оценки риска, источники риска и принадлежность к черному списку.</p>
                    <p>Кроме того, результат проверки может содержать различную дополнительную информацию об адресе, такую как принадлежность к кластеру, фактический баланс и сумма переведенных средств.</p>
                    <p>Если необходимая информация отсутствует, результат проверки может оказаться неполным по сравнению с описанными данными.</p>
                    <p>Обратите внимание, что для блокчейнов, проверка которых осуществляется в ограниченном режиме, кластеризация и процентное значение оценки риска недоступны. Оценка риска может быть предоставлена для контрагента только в том случае, если он относится к кластеризированной сущности.</p>`,
    },
    {
        title: 'Что означает показатель процентного риска?',
        description: `<p>Общий показатель риска (в процентах) — это вероятность того, что адрес связан с незаконной деятельностью.</p>
                    <p>AMLBot находит связи проверенного адреса с другими адресами в блокчейне и с объектами разных категорий, каждая из которых имеет разную оценку условного риска, и рассчитывает общую оценку риска на основе этих связей.</p>
                    <p>При расчете общей оценки риска учитывается серьезность обнаруженных подключений. Например, в случае подключений к категориям организаций «Майнинг» (риск 0%) и «Даркнет» (риск 100%) влияние даркнета как более рискованной категории будет выше, а майнингу будет уделяться меньше внимания при оценке рисков.</p>`,
    },
    {
        title: 'Что означают источники риска?',
        description: `<p>AMLBot проверяет указанный адрес кошелька на наличие связей с известными сервисами блокчейна - сущностям. AMLBot условно объединяет эти сервисы в группы с разным уровнем риска противоправной деятельности - категории сущностей.</p>
                    <p>Проверка AML показывает связи проверяемого адреса с этими категориями сущностей как источники риска, с которыми взаимодействовал адрес, и процент средств, переведенных с/на эти сервисы.</p>
                    <p>На основе всех источников риска рассчитывается общая оценка риска, которая помогает пользователю принимать дальнейшие решения об активах.</p>`,
    },
    {
        title: 'В чем разница между проверкой адреса и транзакции?',
        description: `<p>Проверка адреса — это анализ всех связей с другими адресами и объектами в блокчейне с учетом движения входящих и исходящих средств.</p>
                    <p>Процесс проверки транзакций отличается от проверки адреса, и результат зависит от вашей стороны в транзакции. Общая оценка риска всегда зависит от контрагента.</p>
                    <p>Чтобы проверить транзакцию, вам необходимо указать TxID, адрес получателя этой транзакции и выбрать свою сторону в транзакции:<br />
                    - Получатель (вы получили депозит на свой кошелек) - проверяются адреса, с которых были получены средства. Источники риска описывают сервисы, с помощью которых отправители TX накапливали переведенные средства с процентной разбивкой.<br />
                    - Отправитель (вы вывели средства со своего кошелька) — проверяется адрес, на который поступили средства. Источники риска описывают все связи адреса получателя с процентной разбивкой.</p>
                    <p>Таким образом, при проверке транзакции проверяются риски получателя при получении средств и риски отправителя при отправке средств.</p>`,
    },
    {
        title: 'Как я понимаю оценку рисков?',
        description: `<p>Каждый клиент сам определяет, какой процент риска для него приемлем. Условно оценку риска можно разделить следующим образом:<br />
                    - 0-25% — чистый кошелек/транзакция;<br />
                    - 25-75% — средний уровень риска;<br />
                    - более 75% такой кошелек/транзакция считаются рискованными.<br />
                    Также стоит обратить внимание на красные источники риска в подробном анализе, описанном на <a href="">странице</a></p>`,
    },
    {
        title: 'Какие криптовалюты анализирует AMLBot ?',
        description: `<p>AMLBot поддерживает все основные блокчейны и токены на них. Мы постоянно добавляем поддержку дополнительных криптовалют. 
                    Вы всегда можете ознакомиться с актуальным списком поддерживаемых криптовалют <a href="">в личном кабинете</a> или в <a href="">Документация по API</a>.</p>`,
    },
    {
        title: 'Как AMLBot помогает защитить вас от блокировки?',
        description: `<p>Проверяя кошельки контрагентов перед транзакцией, вы можете отказаться от их активов, если уровень риска высок. Также перед переводом средств в другие сервисы вы можете проверить адрес своего кошелька и сохранить результат (сделать скриншот).</p>
                    <p>Если проверка показывает, что ваши активы не были связаны с незаконной деятельностью и сервис заблокировал вас, вы можете предоставить сохраненный результат, чтобы подтвердить чистоту ваших активов.</p>`,
    },
    {
        title: 'Риск превышает 50%, но я уверен, что адрес надежный. Что делать?',
        description: `<p>Результаты проверки основаны на международных базах данных, которые постоянно обновляются. 
                    Таким образом, адрес, риск которого вчера был 0%, сегодня, возможно, получил или передал актив рискованному контрагенту. 
                    В этом случае оценка риска изменится. Если вы хотите быть уверены в результате и определить, в чем причина высокого риска, мы можем провести для вас подробную проверку. 
                    Для этого напишите нам по адресу <a href="mailto:example@example.com">info@amlbot.com</a></p>`,
    },
    {
        title: 'Как часто рекомендуется проводить проверки?',
        description: `<p>Ответ на этот вопрос зависит от вашей уникальной модели рисков. Обычно рекомендуется проверять AML каждый раз, когда вы взаимодействуете с неизвестным кошельком или смарт-контрактом.</p>`,
    },
    {
        title: 'Как быстро пополняется баланс?',
        description: `<p>После подтверждения транзакции баланс пополняется:<br/>
                    • до 10 минут, если оплата была произведена в течение 24 часов после выставления счета;<br/>
                    • до 25 минут, если оплата была произведена через 24 часа после выставления счета. В целом BTC, ETH, USDT и фиат обрабатываются быстрее, чем другие монеты.</p>`,
    },
    {
        title: 'Что произойдет, если я не буду использовать все свои проверки каждый месяц?',
        description: `<p>Если вы приобрели проверки без срока действия — они остаются в вашем аккаунте, и вы можете использовать их в любое время.</p>
                    <p>Если вы приобрели проверки с ограниченным сроком действия, они будут списаны с вашего счета по истечении срока действия.</p>`,
    },
    {
        title: 'Что если мне понадобятся дополнительные проверки?',
        description: `<p>При необходимости вы можете купить дополнительные проверки. Количество проверок всегда отображается в вашем персональном кабинете.</p>`,
    },
    {
        title: 'Как AMLBot обеспечивает защиту данных?',
        description: `<p>AMLBot защищает данные, соблюдая строгие стандарты, что подтверждено нашими сертификациями ISO 9001 и ISO 27001.</p>
                    <p>Наша сертификация по ISO 9001 подчеркивает нашу приверженность обеспечению стабильного качества и повышению удовлетворенности клиентов. 
                    Еще более важно, что сертификация по ISO 27001 демонстрирует нашу приверженность поддержанию высоких стандартов информационной безопасности, защите конфиденциальных данных и соблюдению нормативных требований.</p>
                    <p>Узнайте больше о наших сертификациях <a>здесь.</a></p>`,
    },
];