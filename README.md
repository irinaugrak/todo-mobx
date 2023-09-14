<h1> Приложение "Список задач" ("Todo List")</h1>
<h2>Основной стек технологий: React, TypeScript, JavaScript, MobX. </h2>

<p>Для локализации приложения использован фреймворк <strong>react-i18next</strong>. Была выбрана именно эта технология, т.к. это наиболее популярное и распространенное решение для локализации. Имеет большое комьюнити, автоматически обновляет компоненты при смене языка. В приложении имеется возможность выбора между двумя языками - русским и английским.</p>

<p>Для сохранения списка задач после перезагрузки страницы использован <strong>local storage</strong>.</p>

<p>Для стилизации приложения выбраны следующие технологии: <strong>scss</strong> и <strong>styled-components</strong>.</p>

<h3>Приложение <strong>"Список задач"</strong> разбито на компоненты:</h3>
<ul>
  <li>Header</li>
  <li>&nbsp;&nbsp;Menu</li>
  <li>&nbsp;&nbsp;TodoInput</li>
  <li>Main</li>
  <li>&nbsp;&nbsp;Bar</li>
  <li>&nbsp;&nbsp;TodoList</li>
  <li>&nbsp;&nbsp;&nbsp;&nbsp;TodoItem</li>
  <li>Select - используется как в хедере приложения, так и в основной части</li>
</ul>

<p>Возможность удаления и отметка выполнения реализованы в одном компоненте - TodoItem</p>

<h3>Реализована следующая функциональность:</h3>

<li>Отображение списка задач с их текущим статусом (выполнена/не выполнена).</li>
<li>Возможность добавления новой задачи (реализована проверка на не пустое значение).</li>
<li>Возможность отметки задачи как выполненную.</li>
<li>Возможность удаления задачи.</li>
<li>Возможность редактирования задачи (реализована проверка на невозможность замены текста пустой строкой).</li>
<li>Добавлена возможность фильтрации задач по статусу (показать все/только выполненные/только не выполненные).</li>
<p></p>
<p>Дизайн приложения адаптирован под различные устройства: <strong>desktop</strong>, <strong>320px - 420px</strong>, <strong>421px - 768px</strong>.</p>

<p>Для контроля версий приложения использована система Git.</p>

