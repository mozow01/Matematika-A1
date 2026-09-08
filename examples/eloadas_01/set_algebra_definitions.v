(** A halmazos interaktív példák közös definíciói. *)

Definition SetU (U : Type) := U -> Prop.

Definition isin {U : Type} (x : U) (A : SetU U) := A x.

Notation "x ∈ A" := (isin x A)
  (at level 70, no associativity) : type_scope.

Definition union {U : Type} (A B : SetU U) :=
  fun x => A x \/ B x.

Notation "A ∪ B" := (union A B)
  (at level 70, no associativity) : type_scope.

Definition intersection {U : Type} (A B : SetU U) :=
  fun x => A x /\ B x.

Notation "A ∩ B" := (intersection A B)
  (at level 70, no associativity) : type_scope.

Definition complementer {U : Type} (A : SetU U) :=
  fun x => ~ A x.

Notation "∁ A" := (complementer A)
  (at level 70, no associativity) : type_scope.

Definition empty {U : Type} : SetU U :=
  fun _ => False.

Notation "∅" := empty
  (at level 70, no associativity) : type_scope.

Definition full {U : Type} : SetU U :=
  fun _ => True.

Notation "⊤" := full
  (at level 70, no associativity) : type_scope.

Definition difference {U : Type} (A B : SetU U) :=
  fun x => A x /\ ~ B x.

Definition subset {U : Type} (A B : SetU U) :=
  forall x : U, (x ∈ A) -> (x ∈ B).

Notation "A ⊆ B" := (subset A B)
  (at level 70, no associativity) : type_scope.

Definition seteq {U : Type} (A B : SetU U) :=
  (forall x : U, (x ∈ A) -> (x ∈ B)) /\
  (forall x : U, (x ∈ B) -> (x ∈ A)).

Notation "A ≡ B" := (seteq A B)
  (at level 70, no associativity) : type_scope.
