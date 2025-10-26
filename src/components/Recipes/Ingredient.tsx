type Counted = {
  count: number;
};

type Volumetric = {
  volume: number;
  unit: "ml";
};

type Weighted = {
  weight: number;
  unit: "g";
};

type Simplified = {
  "simple:amount": number;
  "simple:unit": string;
};

export default function Ingredient(
  props: React.PropsWithChildren<
    Counted | Volumetric | Weighted | Simplified | {}
  >,
) {
  if ("simple:amount" in props) {
    // TODO: tooltip
    return (
      <strong>
        {props["simple:amount"]}{" "}
        {pluralize(props["simple:unit"], props["simple:amount"])}{" "}
        {props.children}
      </strong>
    );
  }

  if ("weight" in props) {
    return (
      <strong>
        {props["weight"]}
        {props["unit"]} {props.children}
      </strong>
    );
  }

  if ("volume" in props) {
    return (
      <strong>
        {props["volume"]}
        {props["unit"]} {props.children}
      </strong>
    );
  }

  if ("count" in props) {
    return (
      <strong>
        {props["count"]} {props.children}
      </strong>
    );
  }

  return <strong>{props.children}</strong>;
}

function pluralize(noun: string, amount: number) {
  if (amount === 1) {
    return noun;
  }

  if (noun[-1] === "s") {
    return `${noun}'`;
  }

  return `${noun}s`;
}
