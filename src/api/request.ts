import { reader } from "typescript-monads";
import { ISystemConfig } from "../config/interfaces";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

const parseXml = (parser: DOMParser) => (xml: string) => parser.parseFromString(xml, 'text/xml')

export const createStandardRequestBody =
  (body: string) =>
    reader<ISystemConfig, Observable<Document>>(config =>
      config.transport(body)(config.xaddrs)
        .pipe(map(parseXml(config.parser))))