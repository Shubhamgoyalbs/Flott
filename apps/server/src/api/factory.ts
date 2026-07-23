import { createFactory } from 'hono/factory';
import {AuthVariables} from "@flott/shared";

export const factory = createFactory<{ Variables: AuthVariables }>();
