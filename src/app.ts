import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

import _ from "lodash";
console.log(_.shuffle([1, 2, 3, 4]));

// declare keyword is used to declare variables/ features we know exist to typescript. to let TypeScript know about Global variables which TS cant know about.

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
