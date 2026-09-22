Require Import Reals.
Require Import Ring.
Require Import Lra.

Open Scope R_scope.

Record Vec3 := mkVec3 {
  vx : R;
  vy : R;
  vz : R
}.

Definition vadd (u v : Vec3) : Vec3 :=
  mkVec3 (vx u + vx v) (vy u + vy v) (vz u + vz v).

Definition vsub (u v : Vec3) : Vec3 :=
  mkVec3 (vx u - vx v) (vy u - vy v) (vz u - vz v).

Definition vscale (s : R) (v : Vec3) : Vec3 :=
  mkVec3 (s * vx v) (s * vy v) (s * vz v).

Definition dot (u v : Vec3) : R :=
  vx u * vx v + vy u * vy v + vz u * vz v.

Definition cross (u v : Vec3) : Vec3 :=
  mkVec3
    (vy u * vz v - vz u * vy v)
    (vz u * vx v - vx u * vz v)
    (vx u * vy v - vy u * vx v).

Definition triple (a b c : Vec3) : R := dot a (cross b c).

Definition i : Vec3 := mkVec3 1 0 0.
Definition j : Vec3 := mkVec3 0 1 0.
Definition k : Vec3 := mkVec3 0 0 1.

Lemma vec3_extensionality : forall u v : Vec3,
  vx u = vx v -> vy u = vy v -> vz u = vz v -> u = v.
Proof.
  intros [ux uy uz] [wx wy wz].
  simpl.
  intros Hx Hy Hz.
  subst.
  reflexivity.
Qed.
