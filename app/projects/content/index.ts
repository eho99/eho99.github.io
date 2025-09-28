import Project0 from "./proj-0"
import Project1 from "./proj-1"
import Project2 from "./proj-2"

// This object maps a slug string to a React component
export const projectComponentMap: { [key: string]: React.ComponentType } = {
  'proj-0': Project0,
  'proj-1': Project1,
  'proj-2': Project2,
}