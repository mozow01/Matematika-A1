(** Halmazalgebrai alapok: a halmazokat tulajdonságokként ábrázoljuk. *)

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

Lemma seteq_refl :
  forall {U : Type} (A : SetU U), A ≡ A.
Proof.
  intros U A.
  unfold seteq.
  split; intros x H; assumption.
Qed.

Lemma seteq_sym :
  forall {U : Type} (A B : SetU U), A ≡ B -> B ≡ A.
Proof.
  intros U A B [HAB HBA].
  split; assumption.
Qed.

Lemma seteq_trans :
  forall {U : Type} (A B C : SetU U),
    A ≡ B -> B ≡ C -> A ≡ C.
Proof.
  intros U A B C [HAB HBA] [HBC HCB].
  split.
  - intros x H. apply HBC. apply HAB. assumption.
  - intros x H. apply HBA. apply HCB. assumption.
Qed.

Require Import Coq.Setoids.Setoid.

Add Parametric Relation {U : Type} : (SetU U) (@seteq U)
  reflexivity proved by (@seteq_refl U)
  symmetry proved by (@seteq_sym U)
  transitivity proved by (@seteq_trans U)
  as seteq_rel.

Lemma set_int_comm :
  forall {U : Type} (A B : SetU U), (A ∩ B) ≡ (B ∩ A).
Proof.
  intros U A B.
  split; intros x [HA HB]; split; assumption.
Qed.

Lemma set_uni_comm :
  forall {U : Type} (A B : SetU U), (A ∪ B) ≡ (B ∪ A).
Proof.
  intros U A B.
  split; intros x [HA | HB].
  - right. exact HA.
  - left. exact HB.
  - right. exact HA.
  - left. exact HB.
Qed.

(** A pontonkénti halmazegyenlőség és a Coq-beli függvényegyenlőség
    összekapcsolása extensionalitási elv. *)
Axiom setequality_eq :
  forall {U : Type} (A B : SetU U), A ≡ B -> A = B.

Lemma set_int_comm_eq :
  forall {U : Type} (A B : SetU U), (A ∩ B) = (B ∩ A).
Proof.
  intros U A B.
  apply (@setequality_eq U).
  apply (@set_int_comm U).
Qed.

Lemma set_uni_comm_eq :
  forall {U : Type} (A B : SetU U), (A ∪ B) = (B ∪ A).
Proof.
  intros U A B.
  apply (@setequality_eq U).
  apply (@set_uni_comm U).
Qed.

(** Pre-Boole-algebra struktúra: egyelőre a két kommutativitási
    axiómot rögzítjük. *)
Structure BooleanAlgebra := mk_b {
  B : Type;
  Tru : B;
  Fal : B;
  And : B -> B -> B;
  Or : B -> B -> B;
  Neg : B -> B;
  And_comm : forall x y : B, And x y = And y x;
  Or_comm : forall x y : B, Or x y = Or y x
}.

Definition setU_BooleanAlgebra {U : Type} : BooleanAlgebra :=
  {|
    B := SetU U;
    Tru := full;
    Fal := empty;
    And := intersection;
    Or := union;
    Neg := complementer;
    And_comm := @set_int_comm_eq U;
    Or_comm := @set_uni_comm_eq U
  |}.
